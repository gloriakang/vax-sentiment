Code and such

## Converting csv to multi
Scripts from the `src` directory should all be called form the root project directory, not the `src` directory. Output will be saved in the `output/network` directory.

#### Running single conversion
```
python src/csv_to_multi_single.py data/article02.csv
```

#### Running all csv in data folder
```
bash src/csv_to_multi_batch.sh
```

## jupyter_nbs
- import gml via networkx
- export structured dataframe
  - move to output/dataframes
