# Use Java 17 JRE as the base image
FROM openjdk:11-jre-slim

# Copy the JAR file from the target directory to the container
COPY target/crud-0.0.1-SNAPSHOT.jar /app.jar

# Expose port 8080 for the application
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app.jar"]