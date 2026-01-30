'use client';

import { motion } from 'motion/react';
import { lessonContent } from '@/lib/data/admin';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

export default function AdminEditorPage({ params }: { params: { lessonId: string } }) {
  const { title, courseId, moduleId, metadata, status, lastSaved } = lessonContent;

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 flex flex-col overflow-hidden"
        >
          <div className="border-b border-border bg-card">
            <div className="p-4 flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-card-foreground mb-1">
                  {title}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Course: {courseId} Module: {moduleId}
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Preview</Button>
                <Button variant="outline">Save Draft</Button>
                <Button>Publish</Button>
              </div>
            </div>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 p-6 overflow-y-auto">
              <Tabs defaultValue="content" className="h-full flex flex-col">
                <TabsList className="mb-4">
                  <TabsTrigger value="content">Content</TabsTrigger>
                  <TabsTrigger value="metadata">Metadata</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="flex-1 flex flex-col">
                  <Card className="flex-1 bg-card border-border shadow-sm">
                    <div className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <Label htmlFor="lessonTitle">Lesson Title</Label>
                        <Input
                          id="lessonTitle"
                          defaultValue={title}
                          className="text-lg"
                        />
                      </div>

                      <div className="flex-1 border border-border rounded-md overflow-hidden">
                        <div className="h-full bg-background">
                          <div className="p-4 text-muted-foreground min-h-full">
                            <p className="mb-4">TipTap Editor placeholder</p>
                            <p className="text-sm">
                              This is where the rich text editor will be integrated.
                            </p>
                            <p className="text-sm mt-2">Features to include:</p>
                            <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                              <li>Rich text formatting (bold, italic, underline, etc.)</li>
                              <li>Headings (H1, H2, H3, H4)</li>
                              <li>Lists (ordered and unordered)</li>
                              <li>Links and images</li>
                              <li>Code blocks</li>
                              <li>Tables</li>
                              <li>Media embeds</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <span>Last saved: {lastSaved}</span>
                        <span>
                          Status:{' '}
                          <span
                            className={`ml-1 ${
                              status === 'published'
                                ? 'text-green-600 dark:text-green-400'
                                : status === 'draft'
                                ? 'text-yellow-600 dark:text-yellow-400'
                                : 'text-gray-600 dark:text-gray-400'
                            }`}
                          >
                            {status.toUpperCase()}
                          </span>
                        </span>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="metadata" className="flex-1 overflow-y-auto">
                  <Card className="bg-card border-border shadow-sm">
                    <div className="p-6 space-y-4">
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <textarea
                          name="description"
                          aria-label='description'
                          id="description"
                          defaultValue={metadata.description}
                          rows={4}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" defaultValue={metadata.duration} />
                      </div>
                      <div>
                        <Label htmlFor="difficulty">Difficulty Level</Label>
                        <select
                          id="difficulty"
                          aria-label='difficulty'
                          defaultValue={metadata.difficulty}
                          className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        >
                          <option value="beginner">Beginner</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="tags">Tags</Label>
                        <Input
                          id="tags"
                          defaultValue={metadata.tags.join(', ')}
                          placeholder="Comma-separated tags"
                        />
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                <TabsContent value="settings" className="flex-1 overflow-y-auto">
                  <Card className="bg-card border-border shadow-sm">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Allow Comments
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Enable students to comment on this lesson
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          aria-label='allow comments'
                          defaultChecked={metadata.allowComments}
                          className="w-5 h-5"
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Allow Downloads
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Allow students to download lesson materials
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          aria-label='allow downloads'
                          defaultChecked={metadata.allowDownloads}
                          className="w-5 h-5"
                        />
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-card-foreground">
                            Require Completion
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Students must complete this lesson to proceed
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          aria-label='require completion'
                          defaultChecked={metadata.requireCompletion}
                          className="w-5 h-5"
                        />
                      </div>
                      <Separator />
                      <div>
                        <Label htmlFor="publishDate">Publish Date</Label>
                        <Input
                          id="publishDate"
                          type="date"
                          defaultValue={metadata.publishDate}
                        />
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
