from pathlib import Path
import datetime
Path = Path('.')
author = 'slvrsluger'
now = datetime.datetime.now()
date = now.strftime('%Y-%m-%d')
layout = 'blog'
sizes = ['inline', '5cards']

# stakes (.5/1, 1/2)
stakes = ['.5/1', '1/2']
for i, stake in enumerate(stakes):
    print(str(i), ' - ', stake)
stake = stakes[int(input('Stake: '))]
# situation (pre, fold, turn, river)
situations = ['pre', 'flop', 'turn', 'river']
for i, sit in enumerate(situations):
    print(str(i), ' - ', sit)
situation = situations[int(input('Situation: '))]
# pot-type (srp, 3bp, 4bp)
pot_types = ['srp', '3bp', '4bp']
for i, pot in enumerate(pot_types):
    print(str(i), ' - ', pot)
pot_type = pot_types[int(input('Pot Type: '))]
# players
players = ['hu', 'multiway']
for i, player in enumerate(players):
    print(str(i), ' - ', player)
player = players[int(input('Players: '))]
# stacks
stacks = ['20bb', '50bb', '100bb', '150bb', 'deep']
for i, stack in enumerate(stacks):
    print(str(i), ' - ', stack)
stack = stacks[int(input('Stack: '))]

# cards
holecards_list = input("Enter holecards like this Ac Ks Qd Jc: ").split(' ')
if situation in ['flop', 'turn', 'river']:
    boardcards_list = input("Enter boardcards like this Ac Ks Qs: ").split(' ')

# card size
card_html_list = []
for card in holecards_list + boardcards_list:
    formatted_cards = card[0] + card[1].capitalize()
    card_html_list.append(f'/assets/cards/{formatted_cards}.svg')

# write file
f = open((Path / 'blog' / '_posts' / f'{date}-hand-of-day.md'), 'x')
f.write('---\n')
f.write(f'date: {date}\n')
f.write(f'layout: {layout}\n')
f.write(f'author: {author}\n')
f.write(f'title: TITLE-HERE\n')
f.write('tags: ')
for i, tag in enumerate([stake, situation, pot_type, player, stack]):
    if i+1 != 5: f.write(tag + ' ')
    else: f.write(tag + '\n')
f.write('---\n')
for size in sizes:
    for html_card in card_html_list:
        f.write(f'![card-image]({html_card}#{size})\n')
f.close()
