# Script para extracao massiva de issues do GitHub
# Requer a instalacao do gh CLI
# Uso: ./issue_dumper label_para_filtragem
# Saida no formato de linhas da tabela de tarefas de 03-Metodologia.md

gh issue list --label "$1" --state all --json number | jq ".[].number" | while read -r number ; do
    gh issue view "$number" --json assignees,title,url --template '<tr><td><a href="{{.url}}">{{.title}}</a></td><td>{{range $assignee := .assignees}}{{$assignee.name}}{{end}}</td><td>23/04/2023</td></tr>'
    echo ''
  done

