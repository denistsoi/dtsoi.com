# stats.awk

{s += $2; h += $6 }
END {print "Total Pop:", s, "\nTotal households:", h, "\nAverage household size:", s/h, "\nAverage Population per zip code:", s/NR}
