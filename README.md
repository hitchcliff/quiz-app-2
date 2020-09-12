This app is made with the help of technologies as follows:
* Typescript
* React & Redux
* Axios
* React Router

### Usage:
Simple head over to ```src/Actions/question.action.ts```
then find ```const endpoint = URL```

```const endpoint = `https://opentdb.com/api.php?amount=${param.amount}&category=${param.category}&difficulty=${param.difficulty}&type=${param.selectionType}` ```
* Make sure to keep the variables
1. 1. amount=${param.amount}
2. 2. category=${param.category}
3. 3. difficulty=${param.difficulty}
4. 4. type=${param.selectionType}

### Scope and Limitations:
1. This app is especially made for OpenTDB.com only.
2. Don't believe me, feed it with enough data then modify it at your needs.