// src/cron/sampleJob.ts
import cron, { type ScheduledTask } from "node-cron";

let task: ScheduledTask | null = null;

export const startSampleJob = () => {
  if (task) {
    console.log("Job already exists:", task);
    return task;
  } // Avoid duplicate instances
  console.log("Starting job..");
  task = cron.schedule("* * * * *", () => {
    console.log("Cron job running: One minute passed");
  });
  task.start();
  console.log("Job Started:", task);
  return task;
};

export const stopSampleJob = () => {
  if (!task) {
    console.log("Job doesn't exist:");
    return;
  }
  console.log("Stopping job:", task);
  task.stop();
  task = null;
  console.log("Job stopped");
};
