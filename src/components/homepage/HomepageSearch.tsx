"use client"

import { useState, useRef } from "react"
import { useQuery } from "@tanstack/react-query"
import { useDebounce } from "@/hooks/useDebounce"
import { Search, X, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/utils/cn"
import { fetchSearchResults } from "@/utils/database/search"

interface SearchResultItem {
  identity: number
  labels: string[]
  properties: {
    title?: string
    name?: string
    slug?: string
    difficulty?: string
  }
  elementId: string
}

const HOMEPAGE_DEBOUNCE_DELAY = 300

export function HomepageSearch() {
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const debouncedQuery = useDebounce(inputValue, HOMEPAGE_DEBOUNCE_DELAY)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  const { data: results = [], isLoading, error } = useQuery({
    queryKey: ["search", debouncedQuery],
    queryFn: () => fetchSearchResults(debouncedQuery),
    enabled: debouncedQuery.length > 1,
    staleTime: 1000 * 60 * 5,
  })

  console.log("Search error:", error)

  // Group results by label
  // const groupedResults = results.reduce<Record<string, SearchResultItem[]>>((acc, item) => {
  //   const label = item.labels[0] || "Other"
  //   if (!acc[label]) {
  //     acc[label] = []
  //   }
  //   acc[label].push(item)
  //   return acc
  // }, {})

  const handleSelect = (item: SearchResultItem) => {
    setOpen(false)

    // Navigate based on the type of result
    const label = item.labels[0]
    const slug = item.properties.slug

    if (label === "Problem") {
      router.push(`/problems/${slug}`)
    } else if (label === "Company") {
      router.push(`/companies/${slug}`)
    } else if (label === "Topic") {
      router.push(`/topics/${slug}`)
    }
  }

  const handleClear = () => {
    setInputValue("")
    inputRef.current?.focus()
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-6 bg-blue-500">
      {/* <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
        <input
          placeholder="Search companies or problems..."
          className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
        />
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd> */}
      <CommandDialog open={open} onOpenChange={setOpen}>
      <div className="flex items-center w-full rounded-full border bg-red-500 h-5 px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <CommandInput
            ref={inputRef}
            placeholder="Search companies or problems..."
            value={inputValue}
            onValueChange={setInputValue}
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground focus"
          />
          {inputValue && (
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 rounded-md" onClick={handleClear}>
              <X className="h-4 w-4" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
        </div>
        <CommandList>
          {isLoading && (
            <div className="py-6 text-center">
              <Loader2 className="h-6 w-6 animate-spin mx-auto text-muted-foreground" />
              <p className="text-sm text-muted-foreground mt-2">Searching...</p>
            </div>
          )}

          {!isLoading && inputValue && results.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}

         {false && <>
          {groupedResults["Company"] && (
            <CommandGroup heading="Companies">
              {groupedResults["Company"].map((item) => (
                <CommandItem key={item.elementId} onSelect={() => handleSelect(item)} className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full border">
                    {item.properties.name?.charAt(0) || "C"}
                  </div>
                  <span>{item.properties.name || item.properties.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {groupedResults["Problem"] && (
            <CommandGroup heading="Problems">
              {groupedResults["Problem"].map((item) => (
                <CommandItem
                  key={item.elementId}
                  onSelect={() => handleSelect(item)}
                  className="flex items-center justify-between"
                >
                  <span>{item.properties.title}</span>
                  {item.properties.difficulty && (
                    <Badge className={cn("ml-auto")}>
                      {item.properties.difficulty}
                    </Badge>
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {groupedResults["Topic"] && (
            <CommandGroup heading="Topics">
              {groupedResults["Topic"].map((item) => (
                <CommandItem key={item.elementId} onSelect={() => handleSelect(item)}>
                  <span>{item.properties.name || item.properties.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}</>}
        </CommandList>
      </div>
      </CommandDialog>
    </div>
  )
}
