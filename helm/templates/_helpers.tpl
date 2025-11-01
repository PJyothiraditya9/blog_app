{{- define "blog-app.name" -}}
blog-app
{{- end -}}

{{- define "blog-app.fullname" -}}
{{ printf "%s" (include "blog-app.name" .) }}
{{- end -}}
