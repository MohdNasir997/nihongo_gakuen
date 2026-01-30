'use client'
import { motion } from "motion/react";
import { courseManagementData } from "@/lib/data/admin";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
export default function AdminCoursesPage() {
  return (
    <div className="p-6 md:p-8">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {" "}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-card-foreground mb-2">
            Course Management
          </h1>
          <p className="text-muted-foreground">
            Manage all courses, track enrollments, and monitor performance.
          </p>
        </div>
        <Card className="bg-card border-border shadow-sm">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <input
                type="text"
                placeholder="Search courses..."
                className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground"
              />
              <Button>Add Course</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Course
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Level
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Students
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Rating
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Revenue
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-card-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {courseManagementData.map((course) => (
                    <tr
                      key={course.id}
                      className="border-b border-border hover:bg-accent/50"
                    >
                      <td className="py-4 px-4">
                        <div className="font-medium text-card-foreground">
                          {course.title}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {course.createdDate}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline">{course.level}</Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge
                          className={
                            course.status === "published"
                              ? "bg-green-500/10 text-green-600 dark:text-green-400"
                              : course.status === "draft"
                                ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                                : "bg-gray-500/10 text-gray-600 dark:text-gray-400"
                          }
                        >
                          {course.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-4 text-card-foreground">
                        {course.students}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-yellow-600 dark:text-yellow-400 text-sm">
                            star
                          </span>
                          <span className="text-card-foreground">
                            {course.rating}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-card-foreground">
                        ${course.revenue.toLocaleString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </motion.div>{" "}
    </div>
  );
}
