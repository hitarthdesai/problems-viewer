import { ProblemCard } from "@/components/ProblemCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getProblemCountByCompany } from "@/utils/database/read/getProblemCountByCompany";
import { getProblemsByCompany } from "@/utils/database/read/getProblemsByCompany";

export async function generateStaticParams() {
  return []
}

type Params = Promise<{
  slug: string
}>

export async function generateMetadata({ params }: { params: Params }) {
  const slug = (await params).slug.replace("%20", " ").toLowerCase();
  const {companyName ,problemCount} = await getProblemCountByCompany(slug );

  return {
    title: `List of ${problemCount} problems asked by ${companyName}`,
}
}

export default async function CompanyPage({ params }: { params: Params }) {
    const slug = (await params).slug.replace("%20", " ").toLowerCase();
    const {companyName, problems} = await getProblemsByCompany(slug);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto py-8">
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">Amazon Interview Questions</h1>
          <p className="text-muted-foreground">
            Practice these common interview questions to prepare for your Amazon technical interview
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="w-full md:w-64 space-y-4">
            {/* <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search problems..." className="w-full pl-8" />
            </div> */}

            <div className="space-y-4">
              {/* <DifficultyFilter />
              <TopicFilter /> */}

              <div>
                <h3 className="mb-2 text-sm font-medium">Status</h3>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Solved
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                    Attempted
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <span className="h-2 w-2 rounded-full bg-slate-300 mr-2"></span>
                    Unsolved
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Tabs defaultValue="all">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Problems</TabsTrigger>
                  <TabsTrigger value="favorites">Favorites</TabsTrigger>
                  <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Sort by
                  </Button>
                </div>
              </div>

              <TabsContent value="all" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {problems.map((problem) => (
                      <ProblemCard
                        key={problem.Slug}
                        id={problem.Slug}
                        title={problem.Title}
                        difficulty={problem.Difficulty}
                        topics={problem.Topics}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="favorites">
                <div className="rounded-md border border-dashed p-8 text-center">
                  <h3 className="text-lg font-medium">No favorites yet</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Click the star icon on problems to add them to your favorites
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="recent">
                <div className="rounded-md border border-dashed p-8 text-center">
                  <h3 className="text-lg font-medium">No recently viewed problems</h3>
                  <p className="text-sm text-muted-foreground mt-1">Problems you view will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
