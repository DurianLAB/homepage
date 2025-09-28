{{- /*
Helper templates for durianlab-frontend Helm chart
*/ -}}

{{- define "durianlab-frontend.name" -}}
{{- default .Chart.Name .Values.nameOverride -}}
{{- end -}}

{{- define "durianlab-frontend.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name (include "durianlab-frontend.name" .) -}}
{{- end -}}
{{- end -}}

{{- define "durianlab-frontend.labels" -}}
app.kubernetes.io/name: {{ include "durianlab-frontend.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
app.kubernetes.io/version: {{ .Chart.AppVersion }}
{{- end -}}

{{- define "durianlab-frontend.selectorLabels" -}}
app.kubernetes.io/name: {{ include "durianlab-frontend.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{- define "durianlab-frontend.chart" -}}
{{ .Chart.Name }}-{{ .Chart.Version }}
{{- end -}}
