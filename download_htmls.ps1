$urls = @{
  "Namal_Home_Desktop.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sX2Y1NGI2NDJhZjYyYjQwNWVhMDkyOWJjMWNhYjk0MjE4EgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Academics_Desktop.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sXzI1NzViYTAyODcyNjQ5MjE4ZGQ4NjRlZmZmNzRlZGU4EgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Admissions_Desktop.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sX2Q3YWQxYTQ1OGM0MDQzMDA4M2UyNDg0ZmE2NjhhNDUzEgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Student_Life_Desktop.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sXzg5NzJmNjgzMTRjZTQxM2E5NTRmYzY1NDVlYjNhNjM2EgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Faculty.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sXzI3NmU4ZTI0MjBmZDRkMzJhN2NlYzVhMjUyMjZkMzUyEgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Research.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sX2M4MzUyNTYxN2Q1MDRjOWRiYWQyZGIwOTUxYmM0MDM5EgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086";
  "Namal_Portal.html" = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ5Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpYCiVodG1sX2NiYWZhOTU3ZDU0NDRmMjliNDRkZTNkZDQzNmY0NDU4EgsSBxD4-IGb0xwYAZIBIQoKcHJvamVjdF9pZBITQhEzMTk4MTg1ODgxMTM4NjQ1OQ&filename=&opi=89354086"
}
New-Item -ItemType Directory -Force -Path stitch_html
foreach ($k in $urls.Keys) {
  Invoke-WebRequest -Uri $urls[$k] -OutFile "stitch_html\$k"
}
