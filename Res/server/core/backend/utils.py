from itertools import combinations
from typing import Iterable, List

from .models import Table


def find_table_combinations(tables: Iterable[Table], target: int) -> List[Table]:
    """
    Eng kam stol bilan kerakli sig‘imni qondiradigan kombinatsiyani qaytaradi.
    O(N·2ⁿ)  – 30-40 ta stolgacha amaliy.
    """
    tables = sorted(tables, key=lambda t: t.capacity)
    for r in range(1, len(tables) + 1):
        for combo in combinations(tables, r):
            if sum(t.capacity for t in combo) >= target:
                return list(combo)
    return []