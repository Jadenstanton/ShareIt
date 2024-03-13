# Use the official Microsoft ASP.NET Core runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

# Use the SDK image to build the project
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["ShareIt.csproj", "./ShareIt/"]
RUN dotnet restore "./ShareIt/ShareIt.csproj"
COPY . ./ShareIt
WORKDIR "/src/ShareIt"
RUN dotnet build "ShareIt.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ShareIt.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ShareIt.dll"]
