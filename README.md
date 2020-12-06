# One Quiet Night
`One Queit Night` develops scientifically-driven machine learning models to accurately predict the spread of COVID-19 infections using real-time data from the [C3 AI COVID-19 Data Lake](https://c3.ai/customers/covid-19-data-lake/). `One Quiet Night` forecasts the number of new Covid-19 cases per week for the next 4 weeks at the national, state, and county levels.

`One Quiet Night` built an intuitive web application to show our forecasts with `React`, `React-Simple-Maps`, and `ReChart` for data visualization.


## Forecasts
### Forecasts on the week 11-14-2020
- National level
![forecasts national level](./src/Forecasts/11-14-2020-national.png)

- State level : Washington state (WA)
![forecasts state level](./src/Forecasts/11-14-2020-state.png)

- County level : King county
![forecasts county level](./src/Forecasts/11-14-2020-county.png)


## Testing

Use Docker for local builds
```sh
docker run --rm -it -p 3000:3000 $(docker build -q .)
```