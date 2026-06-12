import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { Folder, ChevronRight, FileText, Folder as FolderIcon, MoreHorizontal } from 'lucide-react'
import { Pagination } from './components/Pagination'
import { FOLDER_CONTENTS, FILES } from '@/data/mockData'
import { cn } from '@/lib/utils'

const PAGE_SIZE = 10

export function FolderPage() {
  const { id = 'f1' } = useParams()
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const folder = FOLDER_CONTENTS[id]
  const parentFile = FILES.find((f) => f.id === id)
  const folderName = folder?.name ?? parentFile?.name ?? 'Folder'
  const items = folder?.items ?? []

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE))
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  return (
    <main className="flex-1 px-medium py-medium flex flex-col gap-small">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-xxxsmall text-[13px] font-poppins text-text-secondary">
        <Folder size={14} strokeWidth={1.5} />
        <Link to="/files" className="hover:text-text-primary">My Files</Link>
        <ChevronRight size={13} strokeWidth={1.5} />
        <span className="text-text-primary font-medium">{folderName}</span>
      </nav>

      {/* Title row */}
      <div className="flex items-start justify-between">
        <h1 className="font-atari text-[22px] tracking-[0.08em] uppercase text-accent-neutral">
          {folderName}
        </h1>
        <button className="text-[12px] font-poppins text-ai underline hover:opacity-80">
          Folder Details
        </button>
      </div>

      {/* Table */}
      <div className="bg-surface-background rounded-card border border-surface-border overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-[1fr_220px_40px] bg-surface-base border-b border-surface-border px-small py-xxsmall gap-xxsmall">
          {['Name', 'Date Modified', ''].map((col) => (
            <span key={col} className="text-[11px] font-poppins font-medium text-text-secondary uppercase tracking-widest">
              {col}
            </span>
          ))}
        </div>

        {pageItems.length === 0 ? (
          <p className="text-center text-text-secondary font-poppins text-[13px] py-xxlarge">
            This folder is empty.
          </p>
        ) : (
          pageItems.map((item, i) => (
            <div
              key={item.id}
              onClick={() => item.isFolder && navigate(`/folder/${item.id}`)}
              className={cn(
                'grid grid-cols-[1fr_220px_40px] items-center px-small py-xxsmall gap-xxsmall row-hover cursor-pointer',
                i < pageItems.length - 1 && 'border-b border-surface-border/40',
              )}
            >
              <div className="flex items-center gap-xxsmall min-w-0">
                {item.isFolder
                  ? <FolderIcon size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
                  : <FileText   size={16} strokeWidth={1.5} className="flex-shrink-0 text-text-secondary" />
                }
                <span className="text-[13px] font-poppins text-text-primary truncate">{item.name}</span>
              </div>
              <span className="text-[13px] font-poppins text-text-secondary">{item.dateModified}</span>
              <button
                aria-label="More options"
                className="flex items-center justify-center w-[28px] h-[28px] rounded-box hover:bg-surface-base text-text-secondary"
                onClick={(e) => e.stopPropagation()}
              >
                <MoreHorizontal size={16} strokeWidth={1.5} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {items.length > 0 && (
        <Pagination
          current={page}
          total={totalPages}
          pageSize={PAGE_SIZE}
          totalItems={items.length}
          onPrev={() => setPage((p) => Math.max(1, p - 1))}
          onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
          onPage={setPage}
        />
      )}
    </main>
  )
}
