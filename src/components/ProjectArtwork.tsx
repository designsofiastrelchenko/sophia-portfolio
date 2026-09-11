import { useRef } from 'react'
import { Icon } from './Icon'
import type { IconName } from './Icon'
import homeReference from '../../references/home-reference.png'
import caseReference from '../../references/case-reference/main-page-reference.PNG?url'
import type { Project } from '../data/portfolio'

// Only the artwork is framed from reference assets. Page text and controls are native HTML.
function ReferenceArtwork({ type }: { type: 'home' | 'case' }) {
  return (
    <svg
      className="reference-artwork"
      viewBox={type === 'home' ? '848 27 1270 741' : '706 276 1223 747'}
      width={type === 'home' ? 1270 : 1223}
      height={type === 'home' ? 741 : 747}
      role="img"
      aria-label="Три экрана приложения: выбор кладовки, статус заказа и список вещей"
    >
      <image
        href={type === 'case' ? caseReference : homeReference}
        width={type === 'case' ? 2383 : 2375}
        height={type === 'case' ? 1346 : 1351}
      />
    </svg>
  )
}

function SellerArtwork() {
  return (
    <div
      className="seller-artwork"
      role="img"
      aria-label="Макет кабинета продавца на ноутбуке: список заказов и статусы отправлений"
    >
      <div className="laptop" aria-hidden="true">
        <div className="laptop-screen">
          <div className="seller-sidebar">
            <strong>
              форма<span>®</span>
            </strong>
            <span className="seller-current">Заказы</span>
            <span>Каталог</span>
            <span>Остатки</span>
            <span>Доставка</span>
            <span>Команда</span>
            <small>
              Настройки
              <br />
              <br />
              Помощь
            </small>
          </div>
          <div className="seller-main">
            <div className="seller-topline">
              Магазин «Предмет» <span>Анна К.</span>
            </div>
            <h3>
              Заказы<span>Создать заказ</span>
            </h3>
            <div className="seller-filters">
              <b>Все заказы</b>
              <span>Новые</span>
              <span>В работе</span>
              <span>Завершённые</span>
            </div>
            <div className="seller-search">
              <span>
                <Icon name="search" /> Номер заказа или покупатель
              </span>
              <span>
                Фильтры <Icon name="filter" />
              </span>
            </div>
            <div className="order-heading">
              <span>Заказ</span>
              <span>Покупатель</span>
              <span>Статус</span>
              <span>Сумма</span>
            </div>
            {[
              'Александра Морозова',
              'Михаил Волков',
              'Мария Кузнецова',
              'Анна Смирнова',
              'Дмитрий Орлов',
            ].map((name, i) => (
              <div className="order-row" key={name}>
                <span>
                  № 104{i + 2}
                  <small>Сегодня, 12:{30 + i * 3}</small>
                </span>
                <span>{name}</span>
                <span>
                  <i className={i % 2 ? 'order-shipped' : ''}>
                    {i % 2 ? 'В доставке' : 'Новый'}
                  </i>
                </span>
                <span>{[4290, 6800, 2450, 8900, 3200][i]} ₽</span>
              </div>
            ))}
          </div>
        </div>
        <div className="laptop-base" />
      </div>
    </div>
  )
}

function BankTransactions() {
  return (
    <div className="bank-transactions">
      {[
        {
          icon: 'external',
          title: 'Анна Кузнецова',
          type: 'Перевод',
          sum: '−5 000 ₽',
        },
        {
          icon: 'plus',
          title: 'Пополнение счёта',
          type: 'С другого банка',
          sum: '+15 000 ₽',
        },
        {
          icon: 'card',
          title: 'Кофейня',
          type: 'Кафе и рестораны',
          sum: '−340 ₽',
        },
      ].map((item) => (
        <div className="bank-transaction" key={item.title}>
          <span>
            <Icon name={item.icon as IconName} />
          </span>
          <div>
            {item.title}
            <small>{item.type}</small>
          </div>
          <b>{item.sum}</b>
        </div>
      ))}
    </div>
  )
}

function BankPhone({ screen }: { screen: 'transfer' | 'home' | 'history' }) {
  return (
    <div className={`bank-phone bank-phone--${screen}`}>
      <div className="phone-island" />
      <div className="phone-status">
        9:41 <Icon name="status" />
      </div>
      <div className="bank-screen">
        {screen === 'home' ? (
          <>
            <div className="bank-greeting">
              Доброе утро, Софья <Icon name="user" />
            </div>
            <div className="bank-card">
              <small>Основной счёт</small>
              <strong>
                128 450<span>,00 ₽</span>
              </strong>
              <div>
                •• 4829 <b>мир</b>
              </div>
            </div>
            <div className="bank-actions">
              <span>
                <Icon name="external" />
                <small>Перевести</small>
              </span>
              <span>
                <Icon name="plus" />
                <small>Пополнить</small>
              </span>
              <span>
                <Icon name="grid" />
                <small>Оплатить</small>
              </span>
            </div>
            <h4>
              Мои счета <span className="bank-all">Все <Icon name="external" /></span>
            </h4>
            <div className="bank-savings">
              <span>
                <Icon name="clock" />
              </span>
              <div>
                На путешествие<small>Накопительный счёт</small>
              </div>
              <b>45 000 ₽</b>
            </div>
            <h4>Последние операции</h4>
            <BankTransactions />
          </>
        ) : screen === 'transfer' ? (
          <>
            <div className="bank-page-heading">
              <Icon name="back" /> <span>Перевод</span>
            </div>
            <div className="recipient-avatar">АК</div>
            <h4 className="recipient-name">Анна Кузнецова</h4>
            <p className="recipient-number">+7 999 ••• 45 67</p>
            <div className="transfer-amount">
              5 000 <span>₽</span>
            </div>
            <p className="recipient-number">Без комиссии</p>
            <div className="transfer-account">
              С основного счёта <span>•• 4829</span>
            </div>
            <div className="number-pad">
              {[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '',
                '0',
                'delete',
              ].map((n, i) => (
                <span key={i}>
                  {n === 'delete' ? <Icon name="backspace" /> : n}
                </span>
              ))}
            </div>
            <div className="bank-primary">Продолжить</div>
          </>
        ) : (
          <>
            <div className="bank-page-heading">
              <Icon name="back" /> <span>История операций</span>
            </div>
            <div className="history-search">
              <Icon name="search" /> Поиск
            </div>
            <div className="history-filters">
              <b>Все</b>
              <span>Поступления</span>
              <span>Расходы</span>
            </div>
            <h4>Сегодня</h4>
            <BankTransactions />
            <h4>Вчера</h4>
            <BankTransactions />
            <div className="history-note">
              Все операции под рукой.
              <br />
              Чек доступен в деталях платежа.
            </div>
          </>
        )}
      </div>
      <div className="phone-home-indicator" />
    </div>
  )
}

export function ProjectArtwork({
  project,
  detail = false,
}: {
  project: Project
  detail?: boolean
}) {
  const viewport = useRef<HTMLDivElement>(null)
  function move(direction: number) {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    viewport.current?.scrollBy({
      left: direction * 260,
      behavior: reduced ? 'instant' : 'smooth',
    })
  }
  return (
    <div className={detail ? 'artwork-gallery' : undefined}>
      <div
        ref={viewport}
        role={detail ? 'region' : undefined}
        aria-label={detail ? 'Экраны проекта' : undefined}
        tabIndex={detail ? 0 : undefined}
        className={`project-artwork project-artwork--${project.id}${detail ? ' project-artwork--detail' : ''}`}
      >
        <div className="project-visual">
          {project.id === 'storage-app' ? (
            <ReferenceArtwork type={detail ? 'case' : 'home'} />
          ) : project.id === 'b2b-saas' ? (
            <SellerArtwork />
          ) : (
            <div
              className="bank-artwork"
              role="img"
              aria-label="Три экрана мобильного банка: перевод, счета и история операций"
            >
              <div className="bank-phones" aria-hidden="true">
                <BankPhone screen="transfer" />
                <BankPhone screen="home" />
                <BankPhone screen="history" />
              </div>
            </div>
          )}
        </div>
      </div>
      {detail ? (
        <div className="gallery-controls">
          <span>Экраны проекта</span>
          <div>
            <button
              type="button"
              aria-label="Предыдущие экраны"
              onClick={() => move(-1)}
            >
              <Icon name="back" />
            </button>
            <button
              type="button"
              aria-label="Следующие экраны"
              onClick={() => move(1)}
            >
              <Icon name="forward" />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
