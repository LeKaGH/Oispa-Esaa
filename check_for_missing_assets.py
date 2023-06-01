### WINDOWS ONLY ###
# Does not work on Linux due to case-sensitive paths.

import os
from typing import Dict, Iterable, List, Set, Tuple

asset_folders = ("img", "snd")
path_overrides: Dict[str, str] = {
    "./snd/paper/page_turning": "./snd/paper/page_turning0.ogg",
    "./snd/pen/pencil_scribble": "./snd/pen/pencil_scribble0.ogg"
}


urls = [f"https://lekagh.github.io/Oispa-Esaa/{x}" for x in asset_folders]
files = []
def addFiles(path: str):
    global files
    for tmp_p in os.listdir(path):
        p = os.path.join(path, tmp_p)
        if os.path.isdir(p):
            if ".git" not in p:
                addFiles(p)
        elif os.path.isfile(p):
            files.append(p)
        else:
            assert False, "Could not determine path type"
addFiles(".")

def find_many(string: str, sub: Iterable[str], start: int = None, end: int = None):
    NOT_FOUND_OVERRIDE = len(string) + 1

    found_positions: List[int] = []
    for s in sub:
        found_positions.append(string.find(s, start, end))
    for i in range(len(found_positions)):
        if found_positions[i] == -1:
            found_positions[i] = NOT_FOUND_OVERRIDE
    found = min(found_positions)
    return found if found != NOT_FOUND_OVERRIDE else -1

file_not_found: Set[Tuple[str, str, Tuple[int, int]]] = set()
for file_index, file in enumerate(files):
    print(f"Processing file '{file}' ({file_index + 1} / {len(files)})")
    content: str
    try:
        with open(file, "r", encoding="utf-8") as f:
            content = f.read()
    except UnicodeDecodeError:
        print(f"'{file}' is not a text file.")
        continue

    content = content.lower()
    for toFind in urls:
        toFind = toFind.lower()
        min_index: int = 0
        while content.find(toFind, min_index) != -1:
            found_pos = content.find(toFind, min_index)
            found_end = find_many(content, ("\"", "\'"), start=found_pos)
            assert found_end != -1

            url = content[found_pos:found_end]

            url_row = content.count("\n", 0, found_pos) + 1
            url_column = found_pos - max(content.rfind("\n", 0, found_pos), 0)
            min_index = found_end

            path = url.replace("oispakalussa.tk", ".")
            if path in path_overrides:
                path = path_overrides[path]
            if not os.path.isfile(path):
                file_not_found.add((path, file, (url_row, url_column)))

RED = '\033[91m'
GREEN = '\033[92m'
YELLOW = '\033[93m'
RESET = '\033[0m'
if len(file_not_found) < 1:
    print(GREEN + "No assets are missing." + RESET)
else:
    print(RED + "Found missing assets!" + RESET)
for missing, url_file, url_file_loc in sorted(file_not_found):
    print(YELLOW + f"'{missing}' is missing! Located at: \"{url_file}:{url_file_loc[0]}:{url_file_loc[1]}\"" + RESET)
