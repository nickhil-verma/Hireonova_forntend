import React from 'react';
import {
  MapPin,
  Briefcase,
  Clock,
  Code,
  Calendar,
  ExternalLink,
  Zap,
} from 'lucide-react';

const truncateDescription = (description, wordLimit) => {
  if (!description) return '';
  const words = description.split(' ');
  return words.length <= wordLimit
    ? description
    : words.slice(0, wordLimit).join(' ') + '...';
};

const highlightMatch = (text, keyword) => {
  if (!keyword || !text) return text;
  const regex = new RegExp(`(${keyword})`, 'gi');
  const parts = String(text).split(regex);

  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-yellow-300 text-black px-1 rounded">
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const JobCards = ({ jobs = [], loading = false, limit = 6, highlight = '' }) => {
  if (loading) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: limit }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-black/5 dark:bg-white/10 h-40 rounded-xl border border-black/10 dark:border-white/20"
          ></div>
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center py-20">
        <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <p className="text-gray-600 dark:text-gray-400 text-lg">No jobs found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {jobs.map((job) => (
        <div
          key={job._id}
          className="flex flex-col md:flex-row gap-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
        >
          <div className="flex-shrink-0">
            <img
              src={job.company_image || ''}
              alt={job.company || 'Company Logo'}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://assets.hongkiat.com/uploads/psd-text-svg/logo-example.jpg';
              }}
              className="w-20 h-20 object-contain rounded-lg border border-black/10 dark:border-white/20 p-2 bg-black/5 dark:bg-white/10"
            />
          </div>

          <div className="flex flex-col flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {highlightMatch(job.job_title || 'Job Title', highlight)}
              </h3>
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                {highlightMatch(job.job_type || 'Full-time', highlight)}
              </span>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {highlightMatch(truncateDescription(job.job_description, 30), highlight)}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-3">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                {highlightMatch(job.location || 'Remote', highlight)}
              </div>
              <div className="flex items-center gap-1">
                <Briefcase size={16} />
                {highlightMatch(job.work_mode || 'Full-time', highlight)}
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                {highlightMatch(job.experience || 'Any level', highlight)} experience
              </div>
              <div className="flex items-center gap-1">
                <Code size={16} />
                {highlightMatch(
                  Array.isArray(job.skills)
                    ? job.skills.slice(0, 3).join(', ')
                    : String(job.skills),
                  highlight
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                {job.date_posted
                  ? new Date(job.date_posted).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })
                  : 'Recently posted'}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <a
                href={job.apply_url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Apply Now
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobCards;
