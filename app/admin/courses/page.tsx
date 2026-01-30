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
          {" "}
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {" "}
            Course Management{" "}
          </h1>{" "}
          <p className="text-slate-500 dark:text-slate-400">
            {" "}
            Manage all courses, track enrollments, and monitor performance.{" "}
          </p>{" "}
        </div>{" "}
        <Card className="bg-card-bg border-border-soft shadow-paper">
          {" "}
          <div className="p-6">
            {" "}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {" "}
              <input
                type="text"
                placeholder="Search courses..."
                className="flex-1 px-3 py-2 border border-border-soft rounded-md bg-background text-slate-900 dark:text-white"
              />{" "}
              <Button>Add Course</Button>{" "}
            </div>{" "}
            <div className="overflow-x-auto">
              {" "}
              <table className="w-full">
                {" "}
                <thead>
                  {" "}
                  <tr className="border-b border-border-soft">
                    {" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Course
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Level
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Status
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Students
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Rating
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Revenue
                    </th>{" "}
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-900 dark:text-white">
                      Actions
                    </th>{" "}
                  </tr>{" "}
                </thead>{" "}
                <tbody>
                  {" "}
                  {courseManagementData.map((course) => (
                    <tr
                      key={course.id}
                      className="border-b border-border-soft hover:bg-slate-50 dark:hover:bg-slate-800/50"
                    >
                      {" "}
                      <td className="py-4 px-4">
                        {" "}
                        <div className="font-medium text-slate-900 dark:text-white">
                          {course.title}
                        </div>{" "}
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {course.createdDate}
                        </div>{" "}
                      </td>{" "}
                      <td className="py-4 px-4">
                        {" "}
                        <Badge variant="outline">{course.level}</Badge>{" "}
                      </td>{" "}
                      <td className="py-4 px-4">
                        {" "}
                        <Badge
                          className={
                            course.status === "published"
                              ? "bg-green-500/10 text-green-500"
                              : course.status === "draft"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-gray-500/10 text-gray-500"
                          }
                        >
                          {" "}
                          {course.status.toUpperCase()}{" "}
                        </Badge>{" "}
                      </td>{" "}
                      <td className="py-4 px-4 text-slate-900 dark:text-white">
                        {course.students}
                      </td>{" "}
                      <td className="py-4 px-4">
                        {" "}
                        <div className="flex items-center gap-2">
                          {" "}
                          <span className="material-symbols-outlined text-yellow-500 text-sm">
                            star
                          </span>{" "}
                          <span className="text-slate-900 dark:text-white">
                            {course.rating}
                          </span>{" "}
                        </div>{" "}
                      </td>{" "}
                      <td className="py-4 px-4 text-slate-900 dark:text-white">
                        \${course.revenue.toLocaleString()}
                      </td>{" "}
                      <td className="py-4 px-4">
                        {" "}
                        <div className="flex gap-2">
                          {" "}
                          <Button variant="ghost" size="sm">
                            Edit
                          </Button>{" "}
                          <Button variant="ghost" size="sm">
                            View
                          </Button>{" "}
                        </div>{" "}
                      </td>{" "}
                    </tr>
                  ))}{" "}
                </tbody>{" "}
              </table>{" "}
            </div>{" "}
          </div>{" "}
        </Card>{" "}
      </motion.div>{" "}
    </div>
  );
}
